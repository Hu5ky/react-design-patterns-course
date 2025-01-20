import { LargePersonListItem } from './people/LargePersonListItem.tsx';
import { SmallPersonListItem } from './people/SmallPersonListItem.tsx';
import { SmallProductListItem } from './products/SmallProductListItem.tsx';
import { LargeProductListItem } from './products/LargeProductListItem.tsx';
import { RegularList } from './lists/RegularList.tsx';
import { personData } from './people/PersonData.tsx';
import { productData } from './products/ProductData.tsx'
import { NumberedList } from './lists/NumberedList.tsx';
import Modal from './Modal.tsx';

function App() {
  return (
    <>
      <Modal>
        <LargeProductListItem
          product={productData[0]}
        />
      </Modal>
      {/* <RegularList
          itemComponent={SmallPersonListItem}
          propName="person"
          items={personData}
      />
      <NumberedList
          itemComponent={LargePersonListItem}
          propName="person"
          items={personData}
      />
      <RegularList
          itemComponent={SmallProductListItem}
          propName="product"
          items={productData}
      />
      <NumberedList
          itemComponent={LargeProductListItem}
          propName="product"
          items={productData}
      /> */}
    </>
  )
}

export default App