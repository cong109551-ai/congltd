import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle2, Copy, Github, MessageSquare, Clock, Globe } from 'lucide-react';
import { ContactFormData } from '../types';

export const StudioContact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    serviceType: '全栈Web开发',
    budgetRange: '¥20,000 - ¥50,000',
    timeline: '1-2 个月内',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [wechatModalOpen, setWechatModalOpen] = useState<boolean>(false);

  const contactEmail = 'usmcong@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const servicesList = ['全栈Web开发', '创意动效/官网', 'AI应用与Agent', '系统重构与顾问'];
  const budgetList = ['< ¥20,000', '¥20,000 - ¥50,000', '¥50,000 - ¥100,000', '> ¥100,000'];

  return (
    <section id="contact" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Info & Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
              <Mail className="w-4 h-4" />
              <span>START A CONVERSATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              与 cong.ltd 开启合作
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              无论是打造一款颠覆性的新产品，还是优化现有核心系统的架构与动效，欢迎随时致信。通常在 24 小时内回复。
            </p>
          </div>

          {/* Direct Email Card */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              官方直连邮箱 (Official Email)
            </div>
            <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-950 border border-zinc-800">
              <span className="font-mono text-sm sm:text-base text-zinc-200 font-medium truncate">
                {contactEmail}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  title="复制邮箱"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={`mailto:${contactEmail}`}
                  className="px-3 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
                >
                  写信
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>标准工作响应时效：8-24 小时内</span>
            </div>
          </div>

          {/* Social Channels */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              其他平台连接
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/usmcong"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white flex items-center gap-2.5 text-xs font-mono transition-colors"
              >
                <Github className="w-4 h-4 text-zinc-400" />
                <span>GitHub @usmcong</span>
              </a>

              <button
                onClick={() => setWechatModalOpen(true)}
                className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white flex items-center gap-2.5 text-xs font-mono transition-colors cursor-pointer text-left"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>微信 / WeChat</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">需求已成功送达！</h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                  感谢您的致信。Cong 会尽快审阅您的项目需求，并在 24 小时内向您的邮箱（{formData.email}）发送详细回复。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 transition-colors cursor-pointer"
                >
                  发送另一则咨询
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-300">
                      您的姓名 / 团队 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="如：Alex / Acme Corp"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-cyan-500 focus:outline-none text-sm text-white placeholder:text-zinc-600 font-sans transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-300">
                      联系邮箱 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-cyan-500 focus:outline-none text-sm text-white placeholder:text-zinc-600 font-sans transition-colors"
                    />
                  </div>
                </div>

                {/* Service Types */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-300">合作意向类型</label>
                  <div className="flex flex-wrap gap-2">
                    {servicesList.map((service) => (
                      <button
                        type="button"
                        key={service}
                        onClick={() => setFormData({ ...formData, serviceType: service })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                          formData.serviceType === service
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                            : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-300">预算范围预估</label>
                  <div className="flex flex-wrap gap-2">
                    {budgetList.map((budget) => (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => setFormData({ ...formData, budgetRange: budget })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                          formData.budgetRange === budget
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                            : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-300">
                    项目简述或具体需求 <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="请简要描述您的项目目标、核心功能模块或希望达成的时间节点..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-cyan-500 focus:outline-none text-sm text-white placeholder:text-zinc-600 font-sans transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>提交咨询需求</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* WeChat Modal */}
      {wechatModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-2xl bg-zinc-950 border border-zinc-800 p-6 text-center space-y-4">
            <h3 className="text-base font-bold text-white">微信沟通</h3>
            <p className="text-xs text-zinc-400">
              请添加工作微信或扫描下方账号交流，备注「cong.ltd 咨询」：
            </p>
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-cyan-300 text-sm">
              WeChat ID: <span className="font-bold text-white">usmcong</span>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText('usmcong');
                alert('已复制微信号: usmcong');
              }}
              className="w-full py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 transition-colors cursor-pointer"
            >
              复制微信号
            </button>
            <button
              onClick={() => setWechatModalOpen(false)}
              className="text-xs text-zinc-400 hover:text-white"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
