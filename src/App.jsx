<Routes>
  <Route 
    path="/" 
    element={
      <main>
        <Hero />
        <About />
        <FeaturedProducts />
        <Ingredients />
        <Testimonials />
      </main>
    } 
  />
  <Route path="/category/:name" element={<Category />} />
  <Route path="/distributor" element={<Distributor />} />
  <Route path="/our-story" element={<OurStory />} />
</Routes>