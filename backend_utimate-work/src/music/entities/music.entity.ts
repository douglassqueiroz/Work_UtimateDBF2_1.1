import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('music')
export class Music {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    genero: string;
/*
    @ManyToOne(() => Band, (Band) => Band)
    band:Band;

    @ManyToOne(() => Genre, (Genre) => Genre)
    genre:Genre;
*/
}
