-- CreateTable
CREATE TABLE "Realtor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "reg_date" TIMESTAMP(3) NOT NULL,
    "deactivate_date" TIMESTAMP(3) NOT NULL,
    "photo" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Realtor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObjectType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ObjectType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResidenceType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "objectTypeId" INTEGER,

    CONSTRAINT "ResidenceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObjectCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ObjectCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObjectStatus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ObjectStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rate" TEXT NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Renovation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Renovation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WindowSide" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "WindowSide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "RoomType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Object" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "realtorId" INTEGER,
    "objectTypeId" INTEGER,
    "residenceTypeId" INTEGER,
    "objectCategoryId" INTEGER,
    "objectStatusId" INTEGER,
    "is_studio" BOOLEAN NOT NULL,
    "floor" INTEGER NOT NULL,
    "floors_in_building" INTEGER NOT NULL,
    "total_area" DOUBLE PRECISION NOT NULL,
    "live_area" DOUBLE PRECISION NOT NULL,
    "kitchen_area" DOUBLE PRECISION NOT NULL,
    "rooms_area" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "currencyId" INTEGER,
    "price_per_square" DOUBLE PRECISION NOT NULL,
    "price_type" DOUBLE PRECISION NOT NULL,
    "renovationId" INTEGER,
    "windowSideId" INTEGER,
    "roomTypeId" INTEGER,
    "is_apartment" BOOLEAN NOT NULL,
    "is_luxury" BOOLEAN NOT NULL,
    "ceiling_height" DOUBLE PRECISION NOT NULL,
    "combined_bath_count" INTEGER NOT NULL,
    "separate_bath_count" INTEGER NOT NULL,
    "loggia_count" INTEGER NOT NULL,
    "loggia_description" TEXT NOT NULL,
    "balcony_count" INTEGER NOT NULL,
    "balcony_description" TEXT NOT NULL,
    "general_description" TEXT NOT NULL,
    "cadastral_number" INTEGER NOT NULL,
    "document" TEXT NOT NULL,
    "layout" TEXT NOT NULL,
    "fotos" TEXT NOT NULL,
    "online_show" BOOLEAN NOT NULL,
    "video" TEXT NOT NULL,

    CONSTRAINT "Object_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OwnerShip" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "OwnerShip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReasonDeleting" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ReasonDeleting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OwnerCooperation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "OwnerCooperation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RelationshipType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "RelationshipType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OwnerRelation" (
    "id" SERIAL NOT NULL,
    "ownerShipId" INTEGER,
    "reasonDeletingId" INTEGER,
    "ownerCooperationId" INTEGER,
    "relationshipTypeId" INTEGER,
    "commission_amount" DOUBLE PRECISION NOT NULL,
    "commission_comment" TEXT NOT NULL,
    "deposit_amount" DOUBLE PRECISION NOT NULL,
    "deposit_paid" DOUBLE PRECISION NOT NULL,
    "owner_price_ideal" DOUBLE PRECISION NOT NULL,
    "owner_price_real" DOUBLE PRECISION NOT NULL,
    "owner_price_minimal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "OwnerRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "regionId" INTEGER,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mahalla" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Mahalla_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Street" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Street_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Metro" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Metro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "regionId" INTEGER,
    "districtId" INTEGER,
    "areaId" INTEGER,
    "mahallaId" INTEGER,
    "streetId" INTEGER,
    "house_number" INTEGER NOT NULL,
    "apartment_number" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "landmark" BOOLEAN NOT NULL,
    "metroId" INTEGER,
    "location_description" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuildingCondition" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BuildingCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuildingSeria" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BuildingSeria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WallMaterial" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "WallMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Overlaps" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Overlaps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterSupply" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "WaterSupply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeatingSystem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "HeatingSystem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parking" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Parking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuildingCharacter" (
    "id" SERIAL NOT NULL,
    "buildingConditionId" INTEGER,
    "buildingSeriaId" INTEGER,
    "building_year" TEXT NOT NULL,
    "wallMaterialId" INTEGER,
    "overlapsId" INTEGER,
    "waterSupplyId" INTEGER,
    "heatingSystemId" INTEGER,
    "is_gas" BOOLEAN NOT NULL,
    "is_electric" BOOLEAN NOT NULL,
    "passenger_elevators_count" INTEGER NOT NULL,
    "freight_elevators_count" INTEGER NOT NULL,
    "is_building_security" BOOLEAN NOT NULL,
    "parkingId" INTEGER,
    "is_demolition_planned" BOOLEAN NOT NULL,

    CONSTRAINT "BuildingCharacter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Realtor_login_key" ON "Realtor"("login");

-- AddForeignKey
ALTER TABLE "ResidenceType" ADD CONSTRAINT "ResidenceType_objectTypeId_fkey" FOREIGN KEY ("objectTypeId") REFERENCES "ObjectType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_realtorId_fkey" FOREIGN KEY ("realtorId") REFERENCES "Realtor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_objectTypeId_fkey" FOREIGN KEY ("objectTypeId") REFERENCES "ObjectType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_residenceTypeId_fkey" FOREIGN KEY ("residenceTypeId") REFERENCES "ResidenceType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_objectCategoryId_fkey" FOREIGN KEY ("objectCategoryId") REFERENCES "ObjectCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_objectStatusId_fkey" FOREIGN KEY ("objectStatusId") REFERENCES "ObjectStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_renovationId_fkey" FOREIGN KEY ("renovationId") REFERENCES "Renovation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_windowSideId_fkey" FOREIGN KEY ("windowSideId") REFERENCES "WindowSide"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "RoomType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OwnerRelation" ADD CONSTRAINT "OwnerRelation_ownerShipId_fkey" FOREIGN KEY ("ownerShipId") REFERENCES "OwnerShip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OwnerRelation" ADD CONSTRAINT "OwnerRelation_reasonDeletingId_fkey" FOREIGN KEY ("reasonDeletingId") REFERENCES "ReasonDeleting"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OwnerRelation" ADD CONSTRAINT "OwnerRelation_ownerCooperationId_fkey" FOREIGN KEY ("ownerCooperationId") REFERENCES "OwnerCooperation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OwnerRelation" ADD CONSTRAINT "OwnerRelation_relationshipTypeId_fkey" FOREIGN KEY ("relationshipTypeId") REFERENCES "RelationshipType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_mahallaId_fkey" FOREIGN KEY ("mahallaId") REFERENCES "Mahalla"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_streetId_fkey" FOREIGN KEY ("streetId") REFERENCES "Street"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_metroId_fkey" FOREIGN KEY ("metroId") REFERENCES "Metro"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildingCharacter" ADD CONSTRAINT "BuildingCharacter_buildingConditionId_fkey" FOREIGN KEY ("buildingConditionId") REFERENCES "BuildingCondition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildingCharacter" ADD CONSTRAINT "BuildingCharacter_buildingSeriaId_fkey" FOREIGN KEY ("buildingSeriaId") REFERENCES "BuildingSeria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildingCharacter" ADD CONSTRAINT "BuildingCharacter_wallMaterialId_fkey" FOREIGN KEY ("wallMaterialId") REFERENCES "WallMaterial"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildingCharacter" ADD CONSTRAINT "BuildingCharacter_overlapsId_fkey" FOREIGN KEY ("overlapsId") REFERENCES "Overlaps"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildingCharacter" ADD CONSTRAINT "BuildingCharacter_waterSupplyId_fkey" FOREIGN KEY ("waterSupplyId") REFERENCES "WaterSupply"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildingCharacter" ADD CONSTRAINT "BuildingCharacter_heatingSystemId_fkey" FOREIGN KEY ("heatingSystemId") REFERENCES "HeatingSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildingCharacter" ADD CONSTRAINT "BuildingCharacter_parkingId_fkey" FOREIGN KEY ("parkingId") REFERENCES "Parking"("id") ON DELETE SET NULL ON UPDATE CASCADE;
