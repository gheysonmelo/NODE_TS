import AppError from '../../utils/AppError';
import Film, { FilmInput, FilmOutput } from '../../database/models/FilmModel';

export const getAll = async (): Promise<FilmOutput[]> => {
    return await Film.findAll();
};

export const getById = async (id: number): Promise<FilmOutput> => {
    const film = await Film.findByPk(id);

    if (!film) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return film;
};

export const create = async (payload: FilmInput): Promise<FilmOutput> => {
    return await Film.create(payload);
};

export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
    const film = await Film.findByPk(id);

    if (!film) {
        throw new Error ('NotFoundError');
    };

    return await film.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const film = await Film.findByPk(id);

    if (!film) {
        throw new Error('Registro não encontrado');
    };

    await film.destroy();
};