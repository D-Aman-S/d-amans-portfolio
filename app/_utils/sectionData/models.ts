export interface SectionInfo {
    title: string;
    description: string;
}

export interface EducationFiles {
    "high-school": string;
    university: string;
}

export interface EducationInfo {
    title: string;
    description: string;
    files?: EducationFiles;
}

export interface AboutSection {
    title: string;
    info: {
        experience: SectionInfo;
        "hard-skills": SectionInfo;
        "soft-skills": SectionInfo;
        bio?: SectionInfo;
        interests?: SectionInfo;
        education?: EducationInfo;
        sports?: SectionInfo;
        "favorite-games"?: SectionInfo;
    };
}

export interface Data {
    about: {
        sections: {
            "professional-info": {
                title: string;
                info: {
                    experience: SectionInfo;
                    "hard-skills": SectionInfo;
                    "soft-skills": SectionInfo;
                };
            };
            "personal-info": {
                title: string;
                info: {
                    bio: SectionInfo;
                    interests: SectionInfo;
                    education: EducationInfo;
                };
            };
            "hobbies-info": {
                title: string;
                info: {
                    sports: SectionInfo;
                    "favorite-games": SectionInfo;
                };
            };
        };
    };
}
