// Importamos la clase Artist Model donde estan los datos del autor en el archivo tracks.model.ts
import { ArtistModel } from "./artist.model";

//  Interface que contiene los datos de la canción
export interface TrackModel {
    name: string;
    album: string;
    cover: string;
    duration: number;
    url: string;
    likes: number;
    _id: string;
    artist?: ArtistModel;
}
