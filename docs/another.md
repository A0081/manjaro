# Manjaro配置

## 配置国内源

> 点击添加/删除软件（在底部导航栏）
>
> 常规---使用镜像从China----刷新镜像列表
>
> 高级---移除不需要的依赖---启用降级
>
> 第三方---启用AUR支持
>
> 刷新数据库

### 设置中国源

```bash
sudo pacman-mirrors -i -c China -m rank  
```

之后在添加一 个`archlinuxcn` 中国源

```bash
# sudo vim /etc/pacman.conf 
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch

# Aliyun镜像源
# sudo vim /etc/pacman.d/mirrorlist
Server = http://mirrors.aliyun.com/archlinux/$repo/os/$arch
```

更新下系统

```bash
sudo pacman -Syyu && sudo pacman -S archlinuxcn-keyring
```

