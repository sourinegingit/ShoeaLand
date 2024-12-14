import React from "react";
import Container from "../../Container";

interface ProductDetailProps {
  product: any;
}

export interface CartProductType {
  id: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="p-4 ">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>iamge</div>
          <div className="flex flex-col gap-1 text-slate-500 text-sm">
            <h2 className="text-3xl font-medium text-slate-700">
              کفش زیبای ما
            </h2>
            <div className="flex items-center gap-2">
              ⭐⭐⭐⭐⭐⭐⭐
              <div>2review</div>
            </div>
            <div className="text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis deleniti assumenda excepturi ullam suscipit culpa!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              accusamus ad dolores odio voluptates alias similique hic, ipsa
              rerum praesentium provident libero architecto doloribus eaque
              perferendis facere magnam labore quae ex tempore? Assumenda
              suscipit autem quod quis mollitia accusantium nihil impedit sed
              unde. Eos et sunt distinctio ea eveniet soluta voluptates veniam
              totam fuga fugiat explicabo incidunt at perferendis omnis, tenetur
              nam a nemo illum natus vitae. Illum quia voluptas, nobis illo
              quisquam repellat explicabo eveniet rerum accusamus. Cum,
              eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus quam inventore deserunt cumque explicabo fugit sed eius
              optio expedita nemo? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Provident mollitia expedita aperiam beatae porro
              facere praesentium, earum alias quia animi amet dolores ex odio
              velit harum ullam qui et distinctio magnam excepturi sint eveniet
              cumque enim obcaecati. Iste, quisquam doloribus!
            </div>

            <div>
                <span className="font-semibold">CATEGORY:کفش</span>
            </div>
            <div>
              <span className="font-semibold">BRAND:نایک</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
