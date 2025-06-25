import { useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactDto} from 'src/types/dto/ContactDto';
import {GroupContactsDto} from 'src/types/dto/GroupContactsDto';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {Empty} from 'src/components/Empty';
import {ContactCard} from 'src/components/ContactCard';
import { useFetchData } from 'src/hooks';
import { fetchGroups } from 'src/store/actions/groupsActions';
import { fetchContacts } from 'src/store/actions/contactActions';
import { contactSelector, groupsSelector } from 'src/store/selectors/selectors';
import { useAppSelector } from 'src/store/store';

export const GroupPage = () => {
  const {groupId} = useParams<{ groupId: string }>();
  const [filteredContacts, setFilteredContacts] = useState<ContactDto[]>([]);
  const { contacts, loading, error } = useAppSelector(contactSelector);
  const { groups, loading: groupsLoading, error: groupsError } = useAppSelector(groupsSelector);
  
  useFetchData([fetchContacts, fetchGroups]);
  
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>();

  useEffect(() => {
    const findGroup = groups.find(({id}) => id === groupId);
    setGroupContacts(findGroup);
    setFilteredContacts(() => {
      if (findGroup) {
        return contacts.filter(({id}) => findGroup.contactIds.includes(id))
      }
      return [];
    });
  }, [groupId]);


  if (loading || groupsLoading) return <div>Loading...</div>;
  if (error || groupsError) return <div>Error: {error}</div>;
  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {filteredContacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : <Empty />}
    </Row>
  );
}
