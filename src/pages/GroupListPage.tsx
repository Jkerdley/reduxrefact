import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import { useFetchData } from 'src/hooks';
import { fetchGroups } from 'src/store/actions/groupsActions';
import { useAppSelector } from 'src/store/store';
import { groupsSelector } from 'src/store/selectors/selectors';

export const GroupListPage = () => {
  const {groups, loading, error} = useAppSelector(groupsSelector);
  useFetchData(fetchGroups);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Row xxl={4}>
      {groups.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
}
