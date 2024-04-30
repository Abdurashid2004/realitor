import { OwnerRelationService } from './owner-relation.service';
import { CreateOwnerRelationDto } from './dto/create-owner-relation.dto';
import { UpdateOwnerRelationDto } from './dto/update-owner-relation.dto';
export declare class OwnerRelationController {
    private readonly ownerRelationService;
    constructor(ownerRelationService: OwnerRelationService);
    create(createOwnerRelationDto: CreateOwnerRelationDto): Promise<{
        id: number;
        ownerShipId: number;
        reasonDeletingId: number;
        ownerCooperationId: number;
        relationshipTypeId: number;
        commission_amount: number;
        commission_comment: string;
        deposit_amount: number;
        deposit_paid: number;
        owner_price_ideal: number;
        owner_price_real: number;
        owner_price_minimal: number;
    }>;
    findAll(): Promise<{
        id: number;
        ownerShipId: number;
        reasonDeletingId: number;
        ownerCooperationId: number;
        relationshipTypeId: number;
        commission_amount: number;
        commission_comment: string;
        deposit_amount: number;
        deposit_paid: number;
        owner_price_ideal: number;
        owner_price_real: number;
        owner_price_minimal: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        ownerShipId: number;
        reasonDeletingId: number;
        ownerCooperationId: number;
        relationshipTypeId: number;
        commission_amount: number;
        commission_comment: string;
        deposit_amount: number;
        deposit_paid: number;
        owner_price_ideal: number;
        owner_price_real: number;
        owner_price_minimal: number;
    }>;
    update(id: string, updateOwnerRelationDto: UpdateOwnerRelationDto): Promise<{
        id: number;
        ownerShipId: number;
        reasonDeletingId: number;
        ownerCooperationId: number;
        relationshipTypeId: number;
        commission_amount: number;
        commission_comment: string;
        deposit_amount: number;
        deposit_paid: number;
        owner_price_ideal: number;
        owner_price_real: number;
        owner_price_minimal: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        ownerShipId: number;
        reasonDeletingId: number;
        ownerCooperationId: number;
        relationshipTypeId: number;
        commission_amount: number;
        commission_comment: string;
        deposit_amount: number;
        deposit_paid: number;
        owner_price_ideal: number;
        owner_price_real: number;
        owner_price_minimal: number;
    }>;
}
