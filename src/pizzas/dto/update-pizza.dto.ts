import { PartialType } from '@nestjs/mapped-types';
import { CreatePizzaDto } from './create-pizza.dto';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePizzaDto extends PartialType(CreatePizzaDto) {
  @ApiProperty({ example: 'Margherita', description: 'The name of the pizza' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiProperty({
    example: 'margherita.jpg',
    description:
      'The name of the image file, this will be used to find the image in the images/pizza-images folder',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  imageName?: string;

  @ApiProperty({ example: 10.99, description: 'The price of the pizza' })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiProperty({ example: 100, description: 'The quantity of the pizza' })
  @IsOptional()
  @IsNumber()
  quantity?: number;

  imageUrl?: string;

  @ApiProperty({
    example: `The Margherita pizza is a classic Italian pizza known for its simplicity and delicious flavors. It 
features a thin crust topped with fresh, high-quality ingredients. The key components include tomato sauce, fresh                
mozzarella cheese, basil leaves, and a drizzle of olive oil. The combination of these elements creates a harmonious                    
and satisfying pizza experience, allowing the natural flavors to shine through. The Margherita pizza is a timeless                     
favorite, celebrated for its traditional and authentic taste.`,
    description: 'A desctiption of the pizza',
  })
  @IsString()
  @IsNotEmpty()
  description?: string;
}
