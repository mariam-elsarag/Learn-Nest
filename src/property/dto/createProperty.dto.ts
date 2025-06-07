import { IsInt, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @Length(2, 100)
  name: string;
  @IsString()
  // @Length(2, 100, { groups: ['creat'] }) //
  @Length(2, 10, { groups: ['update'] }) // This should only run for 'update'
  description: string;

  @IsInt()
  area: number;
}
