import { ApiProperty } from "@nestjs/swagger";

export class UserModel {
  @ApiProperty()
  public email: string;
  @ApiProperty()
  public password: string;
  @ApiProperty()
  public application: string;
}