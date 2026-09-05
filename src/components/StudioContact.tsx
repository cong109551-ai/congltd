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
  const [copiedWechat, setCopiedWechat] = useState<boolean>(false);
  const [wechatModalOpen, setWechatModalOpen] = useState<boolean>(false);

  const contactEmail = 'usmcong@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyWechat = () => {
    navigator.clipboard.writeText('usmcong');
    setCopiedWechat(true);
    setTimeout(() => setCopiedWechat(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const servicesList = ['全栈系统研发', '数字品牌与动效', '独立数字产品孵化', '架构重构与设计体系'];
  const budgetList = ['< ¥20,000', '¥20,000 - ¥50,000', '¥50,000 - ¥100,000', '> ¥100,000'];

  return (
    <section id="contact" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Contact Info & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs tracking-wider uppercase mb-2">
              <Mail className="w-3.5 h-3.5 text-zinc-500" />
              <span>START A CONVERSATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
              与 cong.ltd 开启合作
            </h2>
            <p className="font-chinese text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              无论是构想一款高品质数字产品，还是优化现有核心系统的工程架构与交互质感，欢迎随时致信。通常在 24 小时内回复。
            </p>
          </div>

          {/* Direct Email Card */}
          <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-xs">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              官方直连邮箱 (Official Email)
            </div>
            <div className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <span className="font-mono text-sm text-zinc-800 dark:text-zinc-200 font-medium truncate pl-1">
                {contactEmail}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md bg-zinc-200/70 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                  title="复制邮箱"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-950 dark:text-zinc-200" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <a
                  href={`mailto:${contactEmail}`}
                  className="px-3 py-1.5 rounded-md bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 font-medium text-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs"
                >
                  写信
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>标准工作响应时效：8-24 小时内</span>
            </div>
          </div>

          {/* Social Channels */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              其他平台连接
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="https://github.com/usmcong"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 flex items-center gap-2.5 text-xs font-mono transition-colors shadow-xs"
              >
                <Github className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                <span>GitHub @usmcong</span>
              </a>

              <button
                onClick={() => setWechatModalOpen(true)}
                className="p-3 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 flex items-center gap-2.5 text-xs font-mono transition-colors cursor-pointer text-left shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                <span>微信 / WeChat</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Interactive Inquiry Form in shadcn card style */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4 font-chinese"
              >
                <div className="w-10 h-10 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-zinc-200" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">需求已送达</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                  感谢您的致信。Cong 会尽快审阅您的项目需求，并在 24 小时内向您的邮箱（{formData.email}）发送详细回复。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-3.5 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
                >
                  发送另一则咨询
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300">
                      姓名 / 团队 <span className="text-zinc-400 dark:text-zinc-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="如：Alex / Studio"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-md bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 focus:outline-none text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 font-sans transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300">
                      联系邮箱 <span className="text-zinc-400 dark:text-zinc-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-md bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 focus:outline-none text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 font-sans transition-colors"
                    />
                  </div>
                </div>

                {/* Service Types */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300">合作类型</label>
                  <div className="flex flex-wrap gap-1.5">
                    {servicesList.map((service) => (
                      <button
                        type="button"
                        key={service}
                        onClick={() => setFormData({ ...formData, serviceType: service })}
                        className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                          formData.serviceType === service
                            ? 'bg-zinc-900 dark:bg-zinc-800 text-zinc-100 font-medium border border-zinc-800 dark:border-zinc-700 shadow-xs'
                            : 'bg-zinc-100 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-900'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300">预算范围预估</label>
                  <div className="flex flex-wrap gap-1.5">
                    {budgetList.map((budget) => (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => setFormData({ ...formData, budgetRange: budget })}
                        className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                          formData.budgetRange === budget
                            ? 'bg-zinc-900 dark:bg-zinc-800 text-zinc-100 border border-zinc-800 dark:border-zinc-700 font-medium shadow-xs'
                            : 'bg-zinc-100 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-900'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300">
                    项目简述或具体构想 <span className="text-zinc-400 dark:text-zinc-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="请简要描述您的项目目标、核心功能构想或期望推进的时间节点..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 focus:outline-none text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 font-chinese transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-md bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 font-medium text-xs sm:text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.99]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>提交咨询需求</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* WeChat Modal */}
      {wechatModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 dark:bg-black/85 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 text-center space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">微信沟通</h3>
            <p className="font-chinese text-xs text-zinc-600 dark:text-zinc-400">
              请添加工作微信交流，备注「cong.ltd 合作咨询」：
            </p>
            <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono text-zinc-800 dark:text-zinc-200 text-sm">
              WeChat ID: <span className="font-bold text-zinc-950 dark:text-zinc-100">usmcong</span>
            </div>
            <button
              onClick={handleCopyWechat}
              className="w-full py-2 rounded-md bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-800 dark:border-zinc-700 text-xs font-mono text-zinc-100 dark:text-zinc-200 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              {copiedWechat ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-200" />
                  <span className="text-zinc-200">已复制到剪贴板</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>复制微信号</span>
                </>
              )}
            </button>
            <button
              onClick={() => setWechatModalOpen(false)}
              className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 cursor-pointer"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
