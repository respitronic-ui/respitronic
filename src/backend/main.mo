import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type Service = {
    title : Text;
    description : Text;
  };

  type Product = {
    name : Text;
    description : Text;
    price : Text;
  };

  type CompanyInfo = {
    name : Text;
    description : Text;
    contactEmail : Text;
    phone : Text;
    address : Text;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Text.compare(product1.name, product2.name);
    };
  };

  module Service {
    public func compare(service1 : Service, service2 : Service) : Order.Order {
      Text.compare(service1.title, service2.title);
    };
  };

  let companyInfo : CompanyInfo = {
    name = "Respitronic";
    description = "Leading provider of medical equipment and solutions.";
    contactEmail = "info@respitronic.com";
    phone = "+1234567890";
    address = "123 Main St, Springfield";
  };

  let services = Map.empty<Text, Service>();
  let products = Map.empty<Text, Product>();

  func getServiceInternal(title : Text) : Service {
    switch (services.get(title)) {
      case (null) { Runtime.trap("Service not found") };
      case (?service) { service };
    };
  };

  func getProductInternal(name : Text) : Product {
    switch (products.get(name)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public shared ({ caller }) func initialize() : async () {
    services.add(
      "Consulting",
      {
        title = "Consulting";
        description = "Expert consulting services for medical equipment selection.";
      },
    );
    services.add(
      "Installation",
      {
        title = "Installation";
        description = "Professional installation of medical devices.";
      },
    );

    products.add(
      "Ventilator X100",
      {
        name = "Ventilator X100";
        description = "Advanced ventilator for hospital use.";
        price = "$5000";
      },
    );
    products.add(
      "Oxygen Concentrator",
      {
        name = "Oxygen Concentrator";
        description = "Portable oxygen concentrator for home and hospital.";
        price = "$1200";
      },
    );
  };

  public query ({ caller }) func getCompanyInfo() : async CompanyInfo {
    companyInfo;
  };

  public query ({ caller }) func getService(title : Text) : async Service {
    getServiceInternal(title);
  };

  public query ({ caller }) func getProduct(name : Text) : async Product {
    getProductInternal(name);
  };

  public query ({ caller }) func getAllServices() : async [Service] {
    services.values().toArray().sort();
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort();
  };
};
