import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../../database/sequelize';

interface FilmAttributes {
    film_id: number,
    title: string,
    description: string,
    release_year: string,
    language_id: string,
    rental_duration: string,
    rental_rate: string,
    length: string,
    replacement_cost: string,
    rating: string,
    last_update: string,
    special_features: string[],
    fulltext: string,
};

export interface FilmInput extends Optional<FilmAttributes, 'film_id'>{};
export interface FilmOutput extends Required<FilmAttributes>{};

class Film extends Model<FilmAttributes, FilmInput> {
    declare film_id: number;
    declare title: string;
    declare description: string;
    declare release_year: string;
    declare language_id: string;
    declare rental_duration: string;
    declare rental_rate: string;
    declare length: string;
    declare replacement_cost: string;
    declare rating: string;
    declare last_update: string;
    declare special_features: string[];
    declare fulltext: string;
};

Film.init({
    film_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    release_year: { type: DataTypes.STRING },
    language_id: { type: DataTypes.STRING },
    rental_duration: { type: DataTypes.STRING },
    rental_rate: { type: DataTypes.STRING },
    length: { type: DataTypes.STRING },
    replacement_cost: { type: DataTypes.STRING },
    rating: { type: DataTypes.STRING },
    last_update: { type: DataTypes.STRING },
    special_features: { type: DataTypes.ARRAY(DataTypes.STRING) },
    fulltext: { type: DataTypes.STRING },
}, {
    sequelize,
    modelName: 'film'
})

export default Film;