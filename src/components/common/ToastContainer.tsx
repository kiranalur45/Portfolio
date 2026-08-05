import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, XCircle, X } from 'lucide-react';
import { useToastState, removeToast } from '../../hooks/useToast';

export const ToastContainer: React.FC = () => {
  const { toasts, subscribe } = useToastState();

  useEffect(() => {
    return subscribe();
  }, [subscribe]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto glass-panel p-4 rounded-xl border border-white/10 shadow-2xl flex items-start gap-3 relative overflow-hidden group"
          >
            <div className="mt-0.5 shrink-0">
              {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-cyan-400" />}
              {toast.type === 'info' && <Info className="w-5 h-5 text-blue-400" />}
              {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-400" />}
              {toast.type === 'error' && <XCircle className="w-5 h-5 text-red-400" />}
            </div>

            <div className="flex-1 min-w-0 pr-4">
              <h4 className="text-sm font-semibold text-white tracking-wide">{toast.title}</h4>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{toast.message}</p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Glowing accent border line */}
            <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${
              toast.type === 'success' ? 'bg-cyan-400' :
              toast.type === 'info' ? 'bg-blue-400' :
              toast.type === 'warning' ? 'bg-amber-400' : 'bg-red-400'
            }`} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
