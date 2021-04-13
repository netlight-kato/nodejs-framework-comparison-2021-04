"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let BundleService = class BundleService {
    constructor() {
        this.store = new Map();
    }
    create(create) {
        const id = uuid_1.v4();
        const bundle = {
            id: id,
            mattress: create.mattress,
            pillows: create.pillows,
        };
        this.store.set(id, bundle);
        return this.toDto(bundle);
    }
    findAll() {
        return Array.from(this.store.values(), this.toDto);
    }
    findOne(id) {
        const bundle = this.store.get(id);
        if (!bundle) {
            throw new common_1.HttpException(`Could not find bundle with ID ${id}.`, common_1.HttpStatus.NOT_FOUND);
        }
        return this.toDto(bundle);
    }
    remove(id) {
        this.store.delete(id);
    }
    toDto(bundle) {
        return {
            id: bundle.id,
            mattress: bundle.mattress,
            pillows: bundle.pillows,
        };
    }
};
BundleService = __decorate([
    common_1.Injectable()
], BundleService);
exports.BundleService = BundleService;
//# sourceMappingURL=bundle.service.js.map