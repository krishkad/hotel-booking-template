import { Bed, } from 'lucide-react';
import { ReactNode } from 'react';

interface Amenity {
    label: string;
    value: string;
    icon: string;
}

const hotelRoomAmenities: Amenity[] = [
    // Bedding and Furniture
    { label: "Comfortable Bed (King, Queen, Twin)", value: "comfortable-bed-king-queen-twin", icon: "/amunities/bed.png"  },
    { label: "Sofa or Armchair", value: "sofa-or-armchair", icon: "/amunities/armchair.png" },
    { label: "Desk and Chair", value: "desk-and-chair", icon: <Desk /> },
    { label: "Nightstands", value: "nightstands", icon: <Nightstands /> },
    { label: "Lamps/Reading Lights", value: "lamps-reading-lights", icon: <Lamps /> },
    { label: "Wardrobe/Closet", value: "wardrobe-closet", icon: <Wardrobe /> },
    { label: "Hangers", value: "hangers", icon: <Hangers /> },

    // Bathroom Facilities
    { label: "Private Bathroom", value: "private-bathroom", icon:"/amunities/bath.png" },
    { label: "Bathtub/Shower", value: "bathtub-shower", icon: "/amunities/shower-head.png" },
    { label: "Towels (Bath, Hand, Face)", value: "towels-bath-hand-face", icon: <Towels /> },
    { label: "Bathrobes", value: "bathrobes", icon: <Bathrobes /> },
    { label: "Slippers", value: "slippers", icon: <Slippers /> },
    { label: "Hairdryer", value: "hairdryer", icon: <Hairdryer /> },
    { label: "Toiletries (Shampoo, Conditioner, Soap, Lotion)", value: "toiletries-shampoo-conditioner-soap-lotion", icon: <Toiletries /> },

    // Climate Control
    { label: "Air Conditioning", value: "air-conditioning", icon: <AirConditioning /> },
    { label: "Heating", value: "heating", icon: <Heating /> },
    { label: "Ceiling Fan", value: "ceiling-fan", icon: <CeilingFan /> },

    // Entertainment and Connectivity
    { label: "Flat-Screen TV", value: "flat-screen-tv", icon: <FlatScreenTv /> },
    { label: "Cable/Satellite Channels", value: "cable-satellite-channels", icon: <CableTv /> },
    { label: "Streaming Services (Netflix, Hulu)", value: "streaming-services-netflix-hulu", icon: <StreamingTv /> },
    { label: "DVD Player", value: "dvd-player", icon: <DvdPlayer /> },
    { label: "Radio/Alarm Clock", value: "radio-alarm-clock", icon: <Radio /> },
    { label: "High-Speed Wi-Fi", value: "high-speed-wifi", icon: <HighSpeedWifi /> },
    { label: "Telephone", value: "telephone", icon: <Phone /> },
    { label: "USB Charging Ports", value: "usb-charging-ports", icon: <UsbChargingPorts /> },

    // Kitchenette Facilities (if applicable)
    { label: "Mini-Fridge", value: "mini-fridge", icon: <MiniFridge /> },
    { label: "Microwave", value: "microwave", icon: <Microwave /> },
    { label: "Coffee Maker", value: "coffee-maker", icon: <Coffee /> },
    { label: "Electric Kettle", value: "electric-kettle", icon: <ElectricKettle /> },
    { label: "Tea/Coffee Supplies", value: "tea-coffee-supplies", icon: <TeaCoffeeSupplies /> },
    { label: "Cutlery and Crockery", value: "cutlery-and-crockery", icon: <CutleryCrockery /> },

    // Safety and Security
    { label: "Safe", value: "safe", icon: <Safe /> },
    { label: "Smoke Detector", value: "smoke-detector", icon: <SmokeDetector /> },
    { label: "Fire Extinguisher", value: "fire-extinguisher", icon: <FireExtinguisher /> },
    { label: "Key Card Access", value: "key-card-access", icon: <KeyCardAccess /> },

    // Housekeeping and Laundry
    { label: "Daily Housekeeping Service", value: "daily-housekeeping-service", icon: <Housekeeping /> },
    { label: "Laundry Bag", value: "laundry-bag", icon: <LaundryBag /> },
    { label: "Iron and Ironing Board", value: "iron-and-ironing-board", icon: <Iron /> },
    { label: "Laundry/Dry Cleaning Service", value: "laundry-dry-cleaning-service", icon: <LaundryService /> },

    // Other In-Room Amenities
    { label: "Room Service Menu", value: "room-service-menu", icon: <RoomServiceMenu /> },
    { label: "Minibar", value: "minibar", icon: <Minibar /> },
    { label: "Complimentary Bottled Water", value: "complimentary-bottled-water", icon: <BottledWater /> },
    { label: "Welcome Drink/Snack", value: "welcome-drink-snack", icon: <WelcomeDrink /> },
    { label: "Stationery (Notepad, Pen)", value: "stationery-notepad-pen", icon: <Stationery /> },
    { label: "In-Room Dining Table", value: "in-room-dining-table", icon: <DiningTable /> },
    { label: "Luggage Rack", value: "luggage-rack", icon: <LuggageRack /> },
    { label: "Full-Length Mirror", value: "full-length-mirror", icon: <FullLengthMirror /> },
    { label: "Blackout Curtains", value: "blackout-curtains", icon: <BlackoutCurtains /> },
    { label: "Soundproofing", value: "soundproofing", icon: <Soundproofing /> },

    // Views
    { label: "City View", value: "city-view", icon: <CityView /> },
    { label: "Sea View", value: "sea-view", icon: <SeaView /> },
    { label: "Mountain View", value: "mountain-view", icon: <Mountain /> },
    { label: "Garden View", value: "garden-view", icon: <GardenView /> },
    { label: "Pool View", value: "pool-view", icon: <PoolView /> },
    { label: "River View", value: "river-view", icon: <RiverView /> },
    { label: "Beach View", value: "beach-view", icon: <Beach /> },
    { label: "Park View", value: "park-view", icon: <ParkView /> },
    { label: "Lake View", value: "lake-view", icon: <Lake /> },
    { label: "Countryside View", value: "countryside-view", icon: <CountrysideView /> },

    // Premium and Luxury Hotel Room Amenities
    { label: "Pillow Menu", value: "pillow-menu", icon: <PillowMenu /> },
  ];
