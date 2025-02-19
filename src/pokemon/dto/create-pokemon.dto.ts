import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    // isInt, isPositiv, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    // isString, MinLenght 1
    @IsString()
    @MinLength(1)
    name: string;

}
