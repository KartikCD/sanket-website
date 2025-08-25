import MountMaryChurch from '../images/projects/mount-mary-church.jpg';
import Avadh from '../images/projects/avadh.jpg';
import StCathedralChurch from '../images/projects/st-cathedral-church.jpg';
import InfantJesusChurch from '../images/projects/infant-jesus-church.jpg';
import VasundharaDevelopers from '../images/projects/vasundhara-developers.webp';
import AtharvaChandramilan from '../images/projects/atharva-chandramilan.jpg';
import AtharvaLaxmiNiwas from '../images/projects/atharva-laxmi-heights.jpg';
import AtharvaVanmalaNiwas from '../images/projects/atharva-vanmala-niwas.jpg';
import EkoStay from '../images/projects/ekostays.jpg';
import LokSarita from '../images/projects/lok-sarita.jpg';
import MpGlobalHeights from '../images/projects/mp-global-heights.jpg';
import InfinityTower from '../images/projects/infinity-tower.webp';
import IslandTower from '../images/projects/island-tower.jpg';
import JswDolvi from '../images/projects/jsw-dolvi.jpeg';
import GingerHotel from '../images/projects/ginger.jpg';

export interface Project {
    id: number;
    title: string;
    location: string;
    area: string;
    duration: number;
    status: "completed" | "ongoing" | "upcoming";
    image: string;
    description: string;
    clientReview: string;
    clientName: string;
    rating: number;
    completionDate?: string;
    startDate?: string;
    projectType: string;
    challenges: string[];
    solutions: string[];
}

export const projects: Array<Project> = [
    {
        id: 1,
        title: "Mount Mary Church",
        location: "Bandra Bandstand, Mumbai",
        area: "10,000+",
        duration: 3,
        status: "completed",
        image: MountMaryChurch,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 2,
        title: "Avadh Utopia",
        location: "Vapi, Gujarat",
        area: "40,000+",
        duration: 9,
        status: "completed",
        image: Avadh,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 3,
        title: "St. Thomas’ Cathedral church",
        location: "Colaba, Mumbai",
        area: "14,000+",
        duration: 4,
        status: "completed",
        image: StCathedralChurch,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 4,
        title: "Infant Jesus Church and High School",
        location: "Goregaon, Mumbai",
        area: "11,000+",
        duration: 4,
        status: "completed",
        image: InfantJesusChurch,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 5,
        title: "Vasundhara Developers",
        location: "Malad, Mumbai",
        area: "20,000+",
        duration: 5,
        status: "completed",
        image: VasundharaDevelopers,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 6,
        title: "Atharva - Chandramilan",
        location: "Ville Parle East, Mumbai",
        area: "6,000+",
        duration: 3,
        status: "completed",
        image: AtharvaChandramilan,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 7,
        title: "Atharva - Laxmi Heights",
        location: "Ville Parle East, Mumbai",
        area: "4,000+",
        duration: 3,
        status: "completed",
        image: AtharvaLaxmiNiwas,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 8,
        title: "Atharva - Vanmala Niwas",
        location: "Ville Parle East, Mumbai",
        area: "8,000+",
        duration: 3,
        status: "completed",
        image: AtharvaVanmalaNiwas,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 9,
        title: "Eko Stay Group",
        location: "Lonavala, Maharashtra",
        area: "30,000+",
        duration: 10,
        status: "completed",
        image: EkoStay,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 10,
        title: "Lok Sarita CHS",
        location: "Marol, Mumbai",
        area: "15,000+",
        duration: 5,
        status: "completed",
        image: LokSarita,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 11,
        title: "M.P. Global Heights",
        location: "Mumbai",
        area: "10,000+",
        duration: 3,
        status: "completed",
        image: MpGlobalHeights,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 12,
        title: "Infinity Tower",
        location: "Malabar Hill, Mumbai",
        area: "15,000+",
        duration: 5,
        status: "completed",
        image: InfinityTower,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 13,
        title: "Island Tower",
        location: "Marine Lines, Mumbai",
        area: "8,000+",
        duration: 3,
        status: "completed",
        image: IslandTower,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 14,
        title: "JSW Dolvi",
        location: "Dolvi, Alibaug, Maharashtra",
        area: "12,000+",
        duration: 3,
        status: "completed",
        image: JswDolvi,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
        id: 15,
        title: "JSW Dolvi",
        location: "Dolvi, Alibaug, Maharashtra",
        area: "12,000+",
        duration: 3,
        status: "ongoing",
        image: JswDolvi,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: []
    },
    {
        id: 16,
        title: "MP Global Heights",
        location: "Mumbai, Maharashtra",
        area: "50,000+",
        duration: 3,
        status: "ongoing",
        image: MpGlobalHeights,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: []
    },
    {
        id: 17,
        title: "Eko Stay Bunglows Lonavala",
        location: "Lonavala, Maharashtra",
        area: "15,000+",
        duration: 3,
        status: "ongoing",
        image: EkoStay,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: []
    },
    {
        id: 18,
        title: "Khushi Farms and Stays",
        location: "Khopoli, Maharashtra",
        area: "4,000+",
        duration: 3,
        status: "ongoing",
        image: AtharvaChandramilan,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: []
    },
    {
        id: 19,
        title: "Ginger Hotels",
        location: "Andheri, Mumbai, Maharashtra",
        area: "4,000+",
        duration: 3,
        status: "ongoing",
        image: GingerHotel,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: []
    },
    {
        id: 20,
        title: "Sankesh Developer",
        location: "Zaveri Bazar, Mumbai, Maharashtra",
        area: "3,000+",
        duration: 3,
        status: "ongoing",
        image: AtharvaChandramilan,
        description: "",
        clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
        clientName: "John Mitchell",
        rating: 5,
        completionDate: "March 15, 2024",
        projectType: "Residential Complex",
        challenges: ["High-rise access", "Weather constraints", "Occupied building"],
        solutions: []
    }
]
