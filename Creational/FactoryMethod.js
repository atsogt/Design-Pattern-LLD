// Factory Method Pattern
// Implement the Factory Method design pattern.

// The Factory Method is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.

// You are given code that includes a few vehicles types and their respective factories. Complete the factory method implementation such that each factory returns the correct vehicle.

// Example:

// VehicleFactory carFactory = new CarFactory();
// VehicleFactory truckFactory = new TruckFactory();
// VehicleFactory bikeFactory = new BikeFactory();

// Vehicle myCar = carFactory.createVehicle();
// Vehicle myTruck = truckFactory.createVehicle();
// Vehicle myBike = bikeFactory.createVehicle();

// myCar.getType();   // "Car"
// myTruck.getType(); // "Truck"
// myBike.getType();  // "Bike"

class Vehicle {
  getType() {
    throw new Error("getType method must be overridden");
  }
}

class Car extends Vehicle {
  getType() {
    return "Car";
  }
}

class Bike extends Vehicle {
  getType() {
    return "Bike";
  }
}

class Truck extends Vehicle {
  getType() {
    return "Truck";
  }
}

class VehicleFactory {
  createVehicle() {
    throw new Error("createVehicle method must be overridden");
  }
}

class CarFactory extends VehicleFactory {
  // Write your code here
}

class BikeFactory extends VehicleFactory {
  // Write your code here
}

class TruckFactory extends VehicleFactory {
  // Write your code here
}
