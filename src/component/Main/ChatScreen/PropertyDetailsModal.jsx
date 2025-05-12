/* eslint-disable react/prop-types */
import { Carousel, Col, Modal, Row, Typography } from 'antd';
import { useState } from 'react';
import Maps from './Maps';

const PropertyDetailsModal = ({ property, open, handleClose }) => {

  const [showItem, setShowItem] = useState("details")

  // Function to open the map in a new tab
  const openMap = (latitude, longitude) => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <Modal
      title="Property Details"
      visible={open}
      onCancel={handleClose}
      footer={null}
      width="80%"
    >
      <Row gutter={[16, 16]} >
        {/* Image Slider (Left Column) */}
        <Col xs={24} md={12}>
          <Carousel autoplay swipeToSlide draggable>
            {property?.imageUris?.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Property image ${index + 1}`} className='w-full max-h-[70vh]' />
              </div>
            ))}
          </Carousel>
        </Col>

        {/* Property Details (Right Column) */}
        <Col xs={24} md={12}>
         <div className='space-x-3 pb-5'>
          <button onClick={()=>setShowItem('details')} className={`text-lg px-5 py-1 ${showItem==='details' ? "bg-[#edaa9d] text-white" : "border-2 border-[#edaa9d] text-[#edaa9d]"} rounded`}>View Detail </button>
          <button onClick={()=>setShowItem('map')} className={`text-lg px-5 py-1 ${showItem==='map' ? "bg-[#edaa9d] text-white" : "border-2 border-[#edaa9d] text-[#edaa9d]"}  rounded`}>View Maps </button>
         </div>
         { showItem==="details" && <><Typography.Title level={4}>{property?.title}</Typography.Title>
          <Typography.Title level={5} style={{ color: '#1890ff' }}>
            {property?.pricing?.label}
          </Typography.Title>
          {/* <Typography.Paragraph>{property?.description || 'No description available'}</Typography.Paragraph> */}

          <Typography.Paragraph><strong>Bathrooms:</strong> {property?.attributes?.bathrooms}</Typography.Paragraph>
          <Typography.Paragraph><strong>Bedrooms:</strong> {property?.attributes?.bedrooms}</Typography.Paragraph>
          <Typography.Paragraph><strong>Living Rooms:</strong> {property?.attributes?.livingRooms}</Typography.Paragraph>

          <Typography.Paragraph>
            <strong>Location:</strong> {property?.location?.coordinates?.latitude}, {property?.location?.coordinates?.longitude}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Address:</strong> {property?.address}
          </Typography.Paragraph>

          {/* Agent Info */}
          <Typography.Paragraph><strong>Agent: </strong>{property?.agent?.branchName}</Typography.Paragraph>
          <img src={property?.agent?.logoUri} alt="Agent Logo" style={{ width: '50px', height: 'auto' }} />
          <Typography.Paragraph>{property?.agent?.phone}</Typography.Paragraph></> }

          {/* View on Map Button */}

          {/* <LoadScript googleMapsApiKey="AIazaSyBwapnpvig2OudZciAgqtdize9IowNV4Lw"> */}
            {showItem==="map" && <Maps latitude={property?.location?.coordinates?.latitude} longitude={property?.location?.coordinates?.longitude} />}
          {/* </LoadScript>a */}
          {/* <Button
          className='bg-[#edaa9d] text-white'
            icon={<FaMapMarkerAlt />}
            onClick={() => openMap(property?.location?.coordinates?.latitude, property?.location?.coordinates?.longitude)}
          >
            View Location on Map
          </Button> */}
        </Col>
      </Row>
    </Modal>
  );
};

export default PropertyDetailsModal;