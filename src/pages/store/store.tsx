import { Link } from "react-router-dom";
import Container from "../../components/container/container";
import ProductItem from "../../components/product-item/product-item";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { Products } from "../../types";
import ReactPaginate from "react-paginate";

const Store = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
      } catch (error) {
        console.error("Failed to fetch Products :", error);
      }
    };
    fetchProducts();
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentProducts = products.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="min-h-screen">
        <Container>
          <h1 className="my-6 text-xl">جدیدترین محصولات</h1>

          <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-2 gap-4">
            {currentProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`}>
                <ProductItem {...item} />
              </Link>
            ))}
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel="بعدی >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< قبلی"
            containerClassName="flex justify-center  py-8 space-x-4 "
            activeClassName="bg-emerald-700 text-white px-4 py-2 rounded"
            pageClassName="px-4 py-2 border rounded mx-2"
            nextClassName="px-4 py-2 border rounded"
            previousClassName="px-4 py-2 border rounded mx-2"
          />
        </Container>
      </div>
    </>
  );
};

export default Store;
