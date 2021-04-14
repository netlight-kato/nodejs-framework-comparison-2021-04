import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { v4 } from 'uuid'
import { BundleDto } from '../../dto/bundle.dto'
import { Bundle } from '../../entities/bundle.entity'
import NotFoundException from '../../Exceptions/NotFoundException';

const store: Map<string, Bundle> = new Map();

export default class BundlesController {
    public async findAll() {
        return Array.from(store.values(), this.toDto)
    }

    public async findById({ params } : HttpContextContract) {
        const bundle = store.get(params.id)

        if (!bundle) {
            throw new NotFoundException(`Could not find bundle with ID ${params.id}.`)
        }

        return this.toDto(bundle);
    }

    public async create({ request } : HttpContextContract) {
        const { mattress, pillows } = request.only(['mattress', 'pillows'])
        const id = v4()
        const bundle = { id, mattress, pillows }
        store.set(id, bundle)
        return this.toDto(bundle)
    }

    public async delete({ params }: HttpContextContract) {
        store.delete(params.id)
    }

    private toDto(bundle: Bundle): BundleDto {
        return {
          id: bundle.id,
          mattress: bundle.mattress,
          pillows: bundle.pillows,
        };
      }
}
