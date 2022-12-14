import { Organization } from '../../infrastructure/db/entities/indexDB';

export const create = async (item: OrganizationDto): Promise<OrganizationDto> => {
    const organization = await Organization.create(item);
    return {
        id: organization.id,
        name: organization.name,
        status: organization.status
    }
}

export const findAll = async (): Promise<OrganizationDto[]> => {
    const organizations = await Organization.findAll();
    return organizations.map(item => {
        const organizationDto: OrganizationDto = {
            id: item.id,
            name: item.name,
            status: item.status
        }
        return organizationDto;
    });
}

export const update = async (id: string, item: OrganizationDto): Promise<OrganizationDto|undefined> => {
    const organization = await Organization.findByPk(id);
    if (organization) {
        await organization.update(item);
        return {
            id: organization.id,
            name: organization.name,
            status: organization.status
        }
    } else {
        return;
    }
}

export const deleteById = async (id: string): Promise<OrganizationDto|undefined> => {
    const organization = await Organization.findByPk(id);
    if (organization) {
        await organization.destroy();
        return {
            id: organization.id,
            name: organization.name,
            status: organization.status
        }
    } else {
        return;
    }
}