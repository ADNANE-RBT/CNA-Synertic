import React from "react";
import {
  Navbar as MTNavbar,
  Button,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

interface EnrollmentFormData {
  name: string;
  personalName: string;
  email: string;
  organism: string;
  country: string;
  phone: string;
}

export function Navbar() {
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState<EnrollmentFormData>({
    name: "",
    personalName: "",
    email: "",
    organism: "",
    country: "",
    phone: "",
  });

  const handleModalOpen = () => setModalOpen(!modalOpen);

  const handleInputChange = (field: keyof EnrollmentFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);
    handleModalOpen();
  };

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MTNavbar
        shadow={false}
        fullWidth
        blurred={false}
        color={isScrolling ? "white" : "transparent"}
        className="fixed top-0 z-50 border-0"
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/logos/logo.png" 
              alt="Logo de l’événement"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <Typography
              color={isScrolling ? "blue-gray" : "white"}
              className="text-lg font-bold hidden sm:block"
            >
              FORUM AFRICAIN DE LA CYBERSÉCURITÉ 2025
            </Typography>
          </div>
      
          <div className="items-center gap-4 lg:flex">
            <Button 
              color={isScrolling ? "gray" : "white"}
              onClick={handleModalOpen}
              className="hover:shadow-md transition-all"
            >
              S’inscrire
            </Button>
          </div>
        </div>
      </MTNavbar>

      {/* Modal d'inscription amélioré */}
      <Dialog 
        open={modalOpen} 
        handler={handleModalOpen} 
        size="lg"
        className="rounded-lg"
      >
        <DialogHeader className="bg-blue-500 text-white rounded-t-lg">
          <div className="w-full flex justify-between items-center">
            <Typography variant="h4" className="font-bold">
              Inscription à l’événement
            </Typography>
            <button 
              onClick={handleModalOpen}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </DialogHeader>
        <DialogBody className="p-6 max-h-[70vh] overflow-y-auto">
          <Typography color="gray" className="mb-6">
            Merci de remplir le formulaire ci-dessous pour vous inscrire au Forum Africain de la Cybersécurité 2025.
          </Typography>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  label="Nom"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  crossOrigin={undefined}
                  className="!border-t-blue-gray-200 focus:!border-blue-500"
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>
              
              <div>
                <Input
                  label="Prénom"
                  value={formData.personalName}
                  onChange={(e) => handleInputChange("personalName", e.target.value)}
                  required
                  crossOrigin={undefined}
                  className="!border-t-blue-gray-200 focus:!border-blue-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <Input
                  type="email"
                  label="Adresse e-mail"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  crossOrigin={undefined}
                  className="!border-t-blue-gray-200 focus:!border-blue-500"
                />
              </div>
              
              <div>
                <Input
                  label="Organisation"
                  value={formData.organism}
                  onChange={(e) => handleInputChange("organism", e.target.value)}
                  required
                  crossOrigin={undefined}
                  className="!border-t-blue-gray-200 focus:!border-blue-500"
                />
              </div>
              
              <div>
                <Input
                  label="Pays"
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  required
                  crossOrigin={undefined}
                  className="!border-t-blue-gray-200 focus:!border-blue-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <Input
                  type="tel"
                  label="Téléphone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  crossOrigin={undefined}
                  className="!border-t-blue-gray-200 focus:!border-blue-500"
                />
              </div>
            </div>
          </form>
        </DialogBody>
        <DialogFooter className="px-6 py-4 border-t border-gray-200">
          <div className="flex justify-end gap-3">
            <Button 
              variant="outlined" 
              color="red" 
              onClick={handleModalOpen}
              className="hover:shadow-sm"
            >
              Annuler
            </Button>
            <Button 
              variant="gradient" 
              color="blue" 
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 hover:shadow-md transition-all"
            >
              Valider l'inscription
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Navbar;
