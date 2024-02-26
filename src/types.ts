export type TankType = {
    Name: string;
    Period: string;
    Points: number;
    Move: string;
    Armor: string;
    GunPen: string;
    GunROF: number;
    GunRng: number;
    AI: number;
    MslPen: string | null;
    MslROF: string | null;
    MslRng: string | null;
    IndRng: string | null;
    IndAmmo: string | null;
    Equip: string | null;
    Cap: string | null;
    Msl: null;
    Weapons: string;
};


export type Vehicle = {
    AI: number;
    Equip: string;
    Gun_Pen: string[];
    Gun_ROF: number;
    Gun_Rng: number;
    Name: string;
    Points: number;
    era: {
        start_era: string;
        end_era: string;
    };
    gun_name: string;
    missile_name: null | string;
    move_type: string[];
    move_value: string;
    nation: string;
    armor: number[];
    unlimited_missiles: boolean;
    infantry_capacity: number;
};


export type NationData = {
    nation: string;
    motorized: ForceData;
    mechanized: ForceData;
    armor: ArmorData;
    weapons: WeaponsData;
};

type ForceData = {
    title: string;
    bhq: HQData;
    companies: CompanyData;
    artillery: UnitQuantity[];
    antiarmor: UnitQuantity[];
};

type ArmorData = {
    title: string;
    bhq: CommandData;
    companies: ArmorCompanyData;
};

type HQData = {
    command: UnitQuantity;
    support: UnitQuantity[];
};

type CompanyData = {
    chq: CHQData;
    platoon_quantity: number;
    platoon: PlatoonData;
};

type ArmorCompanyData = {
    chq: CommandData;
    platoon_quantity: number;
    platoon: PlatoonData;
};

type PlatoonData = {
    AFV: UnitQuantity[];
    Infantry: UnitQuantity[];
};

type CommandData = { unit: string; quantity: number } | { command: string[]; support: string[] };

type CHQData = { command: UnitQuantity; support: UnitQuantity[] } | { command: string[]; support: string[] };

type UnitQuantity = { unit: string; quantity: number };

type WeaponsData = {
    APC: string[];
    CAPC: string[];
    IFV: string[];
    tank: string[];
    CT: string[];
};