import { BundlesService } from './bundles.service';
import { CreateBundleDto } from './dto/create-bundle.dto';
export declare class BundlesController {
    private readonly bundleService;
    constructor(bundleService: BundlesService);
    create(create: CreateBundleDto): import("./dto/bundle.dto").BundleDto;
    findAll(): import("./dto/bundle.dto").BundleDto[];
    findOne(id: string): import("./dto/bundle.dto").BundleDto;
    remove(id: string): void;
}
