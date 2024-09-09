export class SubscriptionEntity {
  private name: string;
  private email: string;
  private password: string;
  private role: string;
  private createdAt: Date;
  private updatedAt: Date;
  constructor(name: string, email: string, password: string, role: string) {
    this.name = name;
    this.email = email;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getRole(): string {
    return this.role;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }
}
