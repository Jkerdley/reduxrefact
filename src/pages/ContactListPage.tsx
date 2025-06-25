import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { useAppSelector } from "src/store/store";
import { contactSelector, groupsSelector } from "src/store/selectors/selectors";
import { fetchContacts } from "src/store/actions/contactActions";
import { useFetchData, useFilteredContacts } from "src/hooks";
import { FilterForm } from "src/components/FilterForm";
import { fetchGroups } from "src/store/actions/groupsActions";

export const ContactListPage = () => {
  const { contacts, loading, error } = useAppSelector(contactSelector);
  const { groups, loading: groupsLoading, error: groupsError } = useAppSelector(groupsSelector);

  useFetchData([fetchContacts, fetchGroups]);

  const {filteredContacts, onSubmit} = useFilteredContacts(contacts, groups);

  if (loading || groupsLoading) return <div>Loading...</div>;
  if (error || groupsError) return <div>Error: {error}</div>;
  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={groups} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filteredContacts?.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
