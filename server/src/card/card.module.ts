import { CardService } from "./card.service";
import { CardController } from "./card.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Card } from "./entities/card.entity";
import { Module } from "@nestjs/common";
import { List } from "../list/entities/list.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Card, List])],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
