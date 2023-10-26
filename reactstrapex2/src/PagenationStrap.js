import {Pagination, PaginationItem, PaginationLink} from 'reactstrap'
function PagenationStrap() {
  return (
    <div>
      <Pagination>
        <PaginationItem>
          <PaginationLink href="#" previous />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=2">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=4">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=5">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" next />
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default PagenationStrap;
