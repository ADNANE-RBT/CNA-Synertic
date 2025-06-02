import { useState } from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import { 
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon, 
  BuildingOfficeIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/solid";

function SpeakersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const speakers = [
    {
      id: 1,
      name: "Dr. Amina El-Fassi",
      title: "Directrice Générale",
      organization: "DGSSI Maroc",
      image: "https://images.unsplash.com/photo-1494790108755-2616c27808e7?w=400&h=400&fit=crop&crop=face",
      expertise: ["Cybersécurité nationale", "Élaboration de politiques", "Gouvernance numérique"],
      bio: "Porte la stratégie nationale de cybersécurité du Maroc avec plus de 15 ans d'expérience dans les politiques de sécurité numérique.",
      icon: ShieldCheckIcon,
      featured: true
    },
    {
      id: 2,
      name: "Prof. Kwame Asante",
      title: "Directeur de la Recherche en Sécurité IA",
      organization: "Université du Cap",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: ["Sécurité IA", "Apprentissage automatique", "Détection des menaces"],
      bio: "Pionnier de la recherche sur les solutions de cybersécurité pilotées par l'IA à travers les marchés africains.",
      icon: CpuChipIcon,
      featured: true
    },
    {
      id: 3,
      name: "Sarah Chen",
      title: "VP Sécurité Cloud",
      organization: "Microsoft Azure",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      expertise: ["Sécurité Cloud", "Zero Trust", "Solutions d'entreprise"],
      bio: "Dirige les initiatives mondiales de sécurité cloud avec un accent sur les marchés émergents et les infrastructures de confiance.",
      icon: CloudIcon,
      featured: true
    },
    {
      id: 4,
      name: "Ahmed Benali",
      title: "RSSI",
      organization: "Groupe OCP",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: ["Sécurité industrielle", "Infrastructures critiques", "Gestion des risques"],
      bio: "Protège les infrastructures critiques dans les plus grandes opérations industrielles d'Afrique.",
      icon: BuildingOfficeIcon,
      featured: false
    },
    {
      id: 5,
      name: "Dr. Fatima Al-Zahra",
      title: "Professeure en cybersécurité",
      organization: "Université Al Akhawayn",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face",
      expertise: ["Droit cybernétique", "Droits numériques", "Protection de la vie privée"],
      bio: "Experte en droit de la cybersécurité et protection des droits numériques dans la région MENA.",
      icon: AcademicCapIcon,
      featured: false
    },
    {
      id: 6,
      name: "Marcus Johnson",
      title: "Architecte Sécurité Global",
      organization: "IBM Security",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      expertise: ["Renseignement sur les menaces", "Architecture sécurité", "Intégration IA"],
      bio: "Conçoit les architectures de sécurité de nouvelle génération pour les entreprises mondiales.",
      icon: GlobeAltIcon,
      featured: false
    }
  ];

  const featuredSpeakers = speakers.filter(speaker => speaker.featured);
  const allSpeakers = speakers.filter(speaker => !speaker.featured);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(allSpeakers.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(allSpeakers.length / 3)) % Math.ceil(allSpeakers.length / 3));
  };

  const SpeakerCard = ({ speaker, featured = false }) => {
    const IconComponent = speaker.icon;
    
    return (
      <Card className={`${featured ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
        <CardBody className="text-center p-6">
          <div className="relative mb-6">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={speaker.image} 
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 ${featured ? 'bg-blue-600' : 'bg-gray-600'} rounded-full flex items-center justify-center`}>
              <IconComponent className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <Typography variant="h5" className="mb-1 text-gray-900">
            {speaker.name}
          </Typography>
          <Typography variant="h6" className={`mb-2 ${featured ? 'text-blue-600' : 'text-purple-600'} font-medium`}>
            {speaker.title}
          </Typography>
          <Typography variant="small" className="text-gray-600 mb-4 font-medium">
            {speaker.organization}
          </Typography>
          
          <Typography variant="small" className="text-gray-700 mb-4 leading-relaxed">
            {speaker.bio}
          </Typography>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {speaker.expertise.map((skill, index) => (
              <span 
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  featured 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-purple-100 text-purple-800'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 py-2 mb-10">
        <div className="text-center mb-16">
          <Typography variant="small" className="text-blue-600 font-bold uppercase tracking-wide mb-2">
            Intervenants d'Exception
          </Typography>
          <Typography variant="h2" className="mb-4 text-gray-900">
            Rencontrez Nos
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Conférenciers & Experts
            </span>
          </Typography>
          <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
            Rejoignez des leaders de l'industrie, des chercheurs et des décideurs qui façonnent l'avenir 
            de la cybersécurité en Afrique et au-delà.
          </Typography>
        </div>

        <div className="mb-20">
          <Typography variant="h3" className="text-center mb-12 text-gray-900">
            Intervenants Principaux
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredSpeakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} featured={true} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <Typography variant="h3" className="text-gray-900">
              Experts en Vedette
            </Typography>
            <div className="flex gap-2">
              <Button
                variant="outlined"
                size="sm"
                className="p-2 border-gray-300"
                onClick={prevSlide}
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </Button>
              <Button
                variant="outlined"
                size="sm"
                className="p-2 border-gray-300"
                onClick={nextSlide}
              >
                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out mb-5"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(allSpeakers.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allSpeakers.slice(slideIndex * 3, slideIndex * 3 + 3).map((speaker) => (
                      <SpeakerCard key={speaker.id} speaker={speaker} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpeakersSection;
