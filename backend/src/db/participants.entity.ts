//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('participants')
export class participantsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  participantId: number;

  @Column('text', { nullable: true })
  fullName: string;

  @Column('text', { nullable: true })
  email: string;

  @Column('text', { nullable: true })
  phone: string;

  @Column('text', { nullable: true })
  city: string;

  @Column('text', { nullable: true })
  profilePicture: string;

  @Column('date', { nullable: true })
  dateOfBirth: Date;

  @Column('text', { nullable: true })
  gender: string;

  @Column('text', { nullable: true })
  bio: string;

  @Column('text', { nullable: true })
  skills: string;

  @Column('integer', { nullable: true })
  previousHackathons: number;

  @Column('text', { nullable: true })
  schoolOrParty: string;

  @Column('text', { nullable: true })
  awards: string;

  @Column('text', { nullable: true })
  languages: string;

  @Column('text', { nullable: true })
  interests: string;

  @Column('integer', { nullable: true })
  teamsSignedUpFor: number;

  @Column('text', { nullable: true })
  posts: string;

  @Column('integer', { nullable: true })
  following: number;

  @Column('integer', { nullable: true })
  followers: number;

  @Column('integer', { nullable: true })
  directMessages: number;

  @Column('text', { nullable: true })
  settings: string;

  @Column('text', { nullable: true })
  specialties: string;

  @Column('text', { nullable: true })
  socialMediaAccounts: string;

  @Column('integer', { nullable: true })
  createTeam: number;
}
