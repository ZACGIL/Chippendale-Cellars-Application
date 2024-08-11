import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../../utils/actions';

export default function Item() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  return (
    <>
        <h1>

        </h1>
    </>
  )
}