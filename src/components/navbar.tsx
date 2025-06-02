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
    console.log("Form data:", formData);
    handleModalOpen();
  };

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
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
              alt="Event Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <Typography
              color={isScrolling ? "blue-gray" : "white"}
              className="text-lg font-bold hidden sm:block"
            >
              AFRICAN CYBERSECURITY FORUM 2025
            </Typography>
          </div>
      
          <div className="items-center gap-4 lg:flex">
              <Button 
                color={isScrolling ? "gray" : "white"}
                onClick={handleModalOpen}
                className="hover:shadow-md transition-all"
              >
                Enroll
              </Button>
          </div>
        </div>
      </MTNavbar>

      {/* Enhanced Enrollment Modal */}
      <Dialog 
        open={modalOpen} 
        handler={handleModalOpen} 
        size="lg"
        className="rounded-lg"
      >
        <DialogHeader className="bg-blue-500 text-white rounded-t-lg">
          <div className="w-full flex justify-between items-center">
            <Typography variant="h4" className="font-bold">
              Event Enrollment
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
            Please fill out the form below to enroll in the African Cybersecurity Forum 2025.
          </Typography>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  label="Name"
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
                  label="Personal Name"
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
                  label="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  crossOrigin={undefined}
                  className="!border-t-blue-gray-200 focus:!border-blue-500"
                />
              </div>
              
              <div>
                <Input
                  label="Organization"
                  value={formData.organism}
                  onChange={(e) => handleInputChange("organism", e.target.value)}
                  required
                  crossOrigin={undefined}
                  className="!border-t-blue-gray-200 focus:!border-blue-500"
                />
              </div>
              
              <div>
                <Input
                  label="Country"
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
                  label="Phone"
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
              Cancel
            </Button>
            <Button 
              variant="gradient" 
              color="blue" 
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 hover:shadow-md transition-all"
            >
              Submit Enrollment
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Navbar;