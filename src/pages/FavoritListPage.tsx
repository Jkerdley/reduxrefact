import {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {ContactDto} from 'src/types/dto/ContactDto';
import { useFetchData } from 'src/hooks';
import { fetchFavorites } from 'src/store/actions/favoritesActions';
import { useAppSelector } from 'src/store/store';
import { contactSelector, favoritesSelector } from 'src/store/selectors/selectors';
import { fetchContacts } from 'src/store/actions/contactActions';

export const FavoritListPage = () => {
  const [filteredConacts, setFilteredConacts] = useState<ContactDto[]>([])
  const {items, favoritesLoading, favoritesError} = useAppSelector(favoritesSelector)
  const {contacts, loading, error} = useAppSelector(contactSelector)
  useFetchData([fetchContacts , fetchFavorites])

  useEffect(() => {
    setFilteredConacts(() => contacts.filter(({id}) => items.includes(id)));
  }, [contacts, items])

  if (loading || favoritesLoading ) return <div>Loading...</div>;
  if (error || favoritesError ) return <div>Error: {error}</div>
  return (
    <Row xxl={4} className="g-4">
      {filteredConacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
}
