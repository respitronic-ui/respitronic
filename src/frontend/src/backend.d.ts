import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    title: string;
    description: string;
}
export interface Product {
    name: string;
    description: string;
    price: string;
}
export interface CompanyInfo {
    name: string;
    description: string;
    address: string;
    contactEmail: string;
    phone: string;
}
export interface backendInterface {
    getAllProducts(): Promise<Array<Product>>;
    getAllServices(): Promise<Array<Service>>;
    getCompanyInfo(): Promise<CompanyInfo>;
    getProduct(name: string): Promise<Product>;
    getService(title: string): Promise<Service>;
    initialize(): Promise<void>;
}
