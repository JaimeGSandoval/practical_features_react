import React from 'react';
import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { getInvoices } from '../data';

//  example function that determines style based on whether isActive is true or not
// <NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
// Search params are like URL params but they sit in a different position in the URL. Instead of being in the normal URL segments separated by /, they are at the end after a ?. You've seen them across the web like "/login?success=1" or "/shoes?brand=nike&sort=asc&sortby=price".

// React Router makes it easy to read and manipulate the search params with useSearchParams. It works a lot like React.useState() but stores and sets the state in the URL search params instead of in memory.

// This describes what the filter & map methods are doing
// Check this out, as the user types:

// 1. setSearchParams() is putting the ?filter=... search params in the URL and rerendering the router.
// 2. useSearchParams is now returning a URLSearchParams with "filter" as one of its values.
// 3. We set the value of the input to whatever is in the filter search param (it's just like useState but in the URLSearchParams instead!)
// 4. We filter our list of invoices based on the filter search param.

// If you filter the list and then click a link, you'll notice that the list is no longer filtered and the search param is cleared from the <input> and the URL. You might want this, you might not! Maybe you want to keep the list filtered and keep the param in the URL.

// We can persist the query string when we click a link by adding it to the link's href. We'll do that by composing NavLink and useLocation from React Router into our own QueryNavLink
function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <QueryNavLink
              style={({ isActive }) => ({
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
              })}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
