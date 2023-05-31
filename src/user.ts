interface Observer {
  update(): void;
}
export class Platform {
  name: string;
  url: string;
  observers: Observer[] = [];

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }

  registerUser(user: User): void {
    // Lógica para registrar un usuario en la plataforma
  }

  attachObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  detachObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}

export class User implements Observer {
  private id: string;
  private name: string;
  private email: string;
  private platform: Platform | undefined; // Referencia a la plataforma

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  update(): void {
    throw new Error("Method not implemented.");
  }

  registerOnPlataform(platform: Platform): boolean {
    this.platform = platform;
    this.platform.attachObserver(this); // Registrar este usuario como observador de la plataforma
    return true;
  }
}
