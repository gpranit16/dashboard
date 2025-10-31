import { Routes, Route, useNavigate } from 'react-router-dom';
        import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
        import { Header } from './components/layout/Header';
        import { Footer } from './components/layout/Footer';
        import { HomePage } from './pages/HomePage';
        import { DashboardPage } from './pages/DashboardPage';
        
        function App() {
          return (
            <div className="min-h-screen flex flex-col bg-background">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path="/dashboard"
                    element={
                      <>
                        <SignedIn>
                          <DashboardPage />
                        </SignedIn>
                        <SignedOut>
                          <RedirectToSignIn />
                        </SignedOut>
                      </>
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          );
        }
        
        export default App;
