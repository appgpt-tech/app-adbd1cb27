//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const participantsTitle = () => {
  const record = useRecordContext();
  return <span>participants {record ? `"${record.fullName}"` : ''}</span>;
};

export const participantsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <NumberField source="participantId" />
      <TextField source="fullName" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="city" />
      <ImageField source="profilePicture" />
      <DateField source="dateOfBirth" />
      <TextField source="gender" />
      <TextField source="bio" />
      <TextField source="skills" />
      <ReferenceField source="previousHackathons" reference="hackathons" />
      <TextField source="schoolOrParty" />
      <TextField source="awards" />
      <TextField source="languages" />
      <TextField source="interests" />
      <ReferenceField source="teamsSignedUpFor" reference="teams" />
      <TextField source="posts" />
      <ReferenceField source="following" reference="participants" />
      <ReferenceField source="followers" reference="participants" />
      <ReferenceField source="directMessages" reference="participants" />
      <TextField source="settings" />
      <TextField source="specialties" />
      <UrlField source="socialMediaAccounts" />
      <ReferenceField source="createTeam" reference="teams" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const participantsEdit = () => (
  <Edit title={<participantsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="participantId" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="fullName" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="email" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="phone" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="city" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="profilePicture" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="dateOfBirth" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="gender" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="bio" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="skills" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="previousHackathons" reference="hackathons" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="schoolOrParty" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="awards" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="languages" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="interests" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="teamsSignedUpFor" reference="teams" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="posts" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="following" reference="participants" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="followers" reference="participants" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="directMessages" reference="participants" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="settings" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="specialties" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="socialMediaAccounts" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="createTeam" reference="teams" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const participantsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="participantId" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="fullName" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="email" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="phone" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="city" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="profilePicture" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="dateOfBirth" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="gender" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="bio" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="skills" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="previousHackathons" reference="hackathons" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="schoolOrParty" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="awards" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="languages" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="interests" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="teamsSignedUpFor" reference="teams" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="posts" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="following" reference="participants" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="followers" reference="participants" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="directMessages" reference="participants" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="settings" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="specialties" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="socialMediaAccounts" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="createTeam" reference="teams" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  <ReferenceInput
    source="previousHackathons"
    label="previousHackathons"
    reference="hackathons"
    alwaysOn
  />,
  ,
  ,
  ,
  ,
  <ReferenceInput
    source="teamsSignedUpFor"
    label="teamsSignedUpFor"
    reference="teams"
    alwaysOn
  />,
  ,
  <ReferenceInput
    source="following"
    label="following"
    reference="participants"
    alwaysOn
  />,
  <ReferenceInput
    source="followers"
    label="followers"
    reference="participants"
    alwaysOn
  />,
  <ReferenceInput
    source="directMessages"
    label="directMessages"
    reference="participants"
    alwaysOn
  />,
  ,
  ,
  ,
  <ReferenceInput
    source="createTeam"
    label="createTeam"
    reference="teams"
    alwaysOn
  />,
];
