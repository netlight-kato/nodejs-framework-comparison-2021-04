
import { BundleDto } from './dto/bundle.dto';
import { CreateBundleDto } from './dto/create-bundle.dto';
import { Bundle } from './entities/bundle.entity';
import { v4 } from 'uuid';
import NotFoundException from '../shared/exceptions/not-found.exeption';

class BundlesService {
  private store: Map<string, Bundle> = new Map();

  create(create: CreateBundleDto): BundleDto {
      const id = v4();
      const bundle = {
          id: id,
          mattress: create.mattress,
          pillows: create.pillows,
      };
      this.store.set(id, bundle);
      return this.toDto(bundle);
  }

  findAll(): BundleDto[] {
      return Array.from(this.store.values(), this.toDto);
  }

  findOne(id: string): BundleDto {
      const bundle = this.store.get(id);

      if (!bundle) {
          throw new NotFoundException(`Could not find bundle with ID ${id}.`);
      }

      return this.toDto(bundle);
  }

  remove(id: string): void {
      this.store.delete(id);
  }

  private toDto(bundle: Bundle): BundleDto {
      return {
          id: bundle.id,
          mattress: bundle.mattress,
          pillows: bundle.pillows,
      };
  }
}

export default new BundlesService();
