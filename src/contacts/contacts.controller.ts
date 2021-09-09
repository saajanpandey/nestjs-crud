import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Contact } from './contacts.entity';
import { ContactsService } from './contacts.service';
@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  index(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Post('create')
  async create(@Body() contactData: Contact): Promise<any> {
    return this.contactsService.create(contactData);
  }

  @Put(':id/update')
  async update(
    @Param('id') id: number,
    @Body() contactData: Contact,
  ): Promise<any> {
    return this.contactsService.update(contactData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: number): Promise<any> {
    return this.contactsService.delete(id);
  }
}
