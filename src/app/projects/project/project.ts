import { LangsObject } from 'src/app/services/lang.service';

export class Project {

    name: String;
    description: LangsObject[];
    complementaryInfos: LangsObject[];
    startDate: String;
    endDate: String;

    thumbnail: String;
    pictures: Picture[];

    tags: String[];

    links: Link[];

}

class Link {
    host: String;
    url: String;
}

class Picture {
    path: String;
    title: String;
    description: String;
}