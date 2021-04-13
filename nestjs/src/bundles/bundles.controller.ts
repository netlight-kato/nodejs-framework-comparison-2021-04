import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BundlesService } from './bundles.service';
import { CreateBundleDto } from './dto/create-bundle.dto';

@Controller('bundles')
export class BundlesController {
  constructor(private readonly bundleService: BundlesService) {}

  @Post()
  create(@Body() create: CreateBundleDto) {
    return this.bundleService.create(create);
  }

  @Get()
  findAll() {
    return this.bundleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bundleService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bundleService.remove(id);
  }
}
