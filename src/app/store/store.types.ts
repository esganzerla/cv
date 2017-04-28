export interface Profile {
  topics: Array<string>;
  personalDescription: string;
  developerDescription: string;
};

export interface Experiences {
  jobTitle: string;
  companyTitle?: string;
  companyURL?: string;
  dateStart: string;
  dateEnd: string;
  description?: string;
};

export interface StoreData {
  profile: Profile;
  experiences: Array<Experiences>;
};

export interface AppState {
  isLoading: Boolean;
  profile?: Profile;
  experiences?: Array<Experiences>;
};
