import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { useAppSelector } from "src/store/store";
import { contactSelector } from "src/store/selectors/selectors";
import { useFetchData } from "src/hooks";
import { fetchContacts } from "src/store/actions/contactActions";

export const ContactPage = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const [resultContact, setresultContact] = useState<ContactDto>();
  const { contacts, loading, error } = useAppSelector(contactSelector);

  useFetchData([fetchContacts])

  useEffect(() => {
    setresultContact(() => contacts.find(({ id }) => id === contactId));
  }, [contactId]);

  if (loading ) return <div>Loading...</div>;
  if (error ) return <div>Error: {error}</div>
  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {resultContact ? <ContactCard contact={resultContact} /> : <Empty />}
      </Col>
    </Row>
  );
};
