import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const Test = () => {
    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
          <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
              <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                <TooltipComponent
                  content="Settings"
                  position="Top"
                >
                  <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: '50%' }}
                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  >
                    <FiSettings />
                  </button>
    
                </TooltipComponent>
                </div>
                </div>
                </BrowserRouter>
              </div>
              
    )
}
export default Test;