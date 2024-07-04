export type ApiUser = {
    gender: string
    name: {
        title: string
        first: string
        last: string
    }
    location: {
        street: {
            number: number
            name: string
        }
        city: string
        state: string
        country: string
        postcode: string
        coordinates: {
            latitude: string
            longitude: string
        }
        timezone: {
            offset: string
            description: string
        }
    }
    email: string
    login: {
        uuid: string
        username: string
        password: string
        salt: string
        md5: string
        sha1: string
        sha256: string
    }
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
    dob: {
        date: string
        age: number
    }
    registered: {
        date: string
        age: number
    }
    phone: string
    cell: string
}

export interface UserProfile {
    userProfile: UserProfileClass;
}

export interface UserProfileClass {
    name:         string;
    profileImage: string;
    aboutMe:      string;
    interests:    string[];
    location:     Location;
    contact:      Contact;
}

export interface Contact {
    email:    string;
    phone:    string;
    linkedin: string;
    github:   string;
}

export interface Location {
    country:  string;
    province: string;
    city:     string;
}
